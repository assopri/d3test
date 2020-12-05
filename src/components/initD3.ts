/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { ipcRenderer } from 'electron';
import * as d3 from 'd3';

interface NodeData {
  name: string;
  label: string;
  id: number;
  index?: number;
  /**
   * Node’s current x-position
   */
  x?: number;
  /**
   * Node’s current y-position
   */
  y?: number;
  /**
   * Node’s current x-velocity
   */
  vx?: number;
  /**
   * Node’s current y-velocity
   */
  vy?: number;
  /**
   * Node’s fixed x-position (if position was fixed)
   */
  fx?: number | null;
  /**
   * Node’s fixed y-position (if position was fixed)
   */
  fy?: number | null;
}

interface LinkData {
  source: NodeData;
  target: NodeData;
  type: string;
}

type Node = d3.Selection<any, NodeData, d3.BaseType, unknown>
type Link = d3.Selection<SVGLineElement, LinkData, d3.BaseType, unknown>

let node: Node | null | undefined = null;
let link: Link | null | undefined = null;
let edgepaths: any | null = null;
let edgelabels: any | null = null;
let svg: d3.Selection<HTMLElement, any, d3.BaseType, unknown> | null | undefined = null;
let width = 0;
let height = 0;
let simulation: d3.Simulation<NodeData, LinkData> | null = null;
let colors: any | null = null;
const links: LinkData[] = [];
const nodes: NodeData[] = [];

function zoomed(d: any) {
  console.log(d);
  const scale = d.transform.k;
  const newViewBox = [
    -d.transform.x / scale,
    -d.transform.y / scale,
    width / scale,
    height / scale,
  ].join(' ');
  svg?.attr('viewBox', newViewBox);
}

function ticked() {
  if (!link || !node) return;
  node
    .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

  link
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    .attr('x1', (d) => node._groups[0][d.source.id - 1].__data__.x)
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    .attr('y1', (d) => node._groups[0][d.source.id - 1].__data__.y)
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    .attr('x2', (d) => node._groups[0][d.target.id - 1].__data__.x)
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    .attr('y2', (d) => node._groups[0][d.target.id - 1].__data__.y);

  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  edgepaths.attr('d', (d: any) => `M ${node._groups[0][d.source.id].__data__.x} ${node._groups[0][d.source.id].__data__.y} L ${node._groups[0][d.target.id].__data__.x} ${node._groups[0][d.target.id].__data__.y}`);

  edgelabels.attr('transform', function (d: any) {
    if (d.target.x < d.source.x) {
      // @ts-ignore
      const bbox = this.getBBox();

      const rx = bbox.x + bbox.width / 2;
      const ry = bbox.y + bbox.height / 2;
      return `rotate(180 ${rx} ${ry})`;
    }

    return 'rotate(0)';
  });
}

function update() {
  node?.remove();
  link?.remove();

  link = svg?.selectAll('.link')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('marker-end', 'url(#arrowhead)');
  if (!link) return;
  link.append('title')
    .text((d) => d.type);

  edgepaths = svg?.selectAll('.edgepath')
    .data(links)
    .enter()
    .append('path')
    .attr('class', 'edgepath')
    .attr('id', (_: unknown, i: number) => `edgepath${i}`)
    .style('pointer-events', 'none');

  edgelabels = svg?.selectAll('.edgelabel')
    .data(links)
    .enter()
    .append('text')
    .style('pointer-events', 'none')
    .attr('class', 'edgelabel')
    .attr('id', (_: unknown, i: number) => `edgelabel${i}`)
    .attr('font-size', 10)
    .attr('fill', '#aaa');

  edgelabels.append('textPath')
    .attr('xlink:href', (_: unknown, i: number) => `#edgepath${i}`)
    .style('text-anchor', 'middle')
    .style('pointer-events', 'none')
    .attr('startOffset', '50%')
    .text((d: LinkData) => d.type);

  node = svg?.selectAll('.node')
    .data(nodes)
    .enter()
    .append('g')
    .attr('class', 'node');

  if (!node) return;
  node.append('circle')
    .attr('r', (data) => links.filter((link) => link.target.id === data.id).length * 3 + 5)
    .style('fill', (_, i) => colors(i.toString()))
    .on('click', (e) => {
      console.log(e);
    });

  node.append('title')
    .text((d) => d.id);

  node.append('text')
    .attr('dy', -3)
    .text((d) => d.name);// {return d.name+":"+d.label;});

  simulation
    ?.nodes(nodes)
    .on('tick', ticked);

  (simulation?.force('link') as d3.ForceLink<NodeData, LinkData>).links(links);

  simulation?.alphaTarget(0.3).restart();
}

function getInternalLinks(content: string) {
  const links: string[] = [];

  const matches = content.match(/\[\[(.*?)\]\]/i);
  if (matches != null) {
    matches.forEach((element) => {
      //! !!!!!!!!!!
      if (!element.includes('[['))links.push(element);
    });
  }

  return links;
}

export const initD3 = async (container: string) => {
  svg = d3.select(container);
  width = +svg.attr('width');
  height = +svg.attr('height');

  colors = d3.scaleOrdinal(d3.schemeCategory10);

  svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 13)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 13)
    .attr('markerHeight', 13)
    .attr('xoverflow', 'visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke', 'none');

  // @ts-ignore
  d3.zoom().scaleExtent([1, 5]).on('zoom', zoomed)(svg);

  svg.on('click', (e) => {
    const pointer = d3.pointer(e);
    nodes.push({
      x: pointer[0],
      y: pointer[1],
      name: 'created by click',
      label: 'labe',
      id: nodes.length,
    });
    update();
  });

  simulation = d3.forceSimulation<NodeData, LinkData>()
    .force('link', d3.forceLink<NodeData, LinkData>().id((d) => d.id.toString()).distance(150))
    .force('charge', d3.forceManyBody().strength(-150))
    .force('x', d3.forceX(width / 2))
    .force('y', d3.forceY(height / 2));

  nodes.length = 0;
  links.length = 0;
  const fileDictionary = await ipcRenderer.invoke('parse-vault-files');

  // let index = 0;
  Object.entries(fileDictionary).forEach(([key]) => {
    nodes.push({
      name: key,
      label: 'labe',
      id: fileDictionary[key].id,
    });

    // link processing
    const outcomingLinks = getInternalLinks(fileDictionary[key].content);

    outcomingLinks.forEach((el) => {
      if (!fileDictionary[el]) { console.log('NO: ', el); } else {
        links.push(
          {
            source: fileDictionary[key],
            target: fileDictionary[el],
            type: '',
          },
        );
      }
    });
  });

  update();
};
