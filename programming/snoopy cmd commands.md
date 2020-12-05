установка среды (yarn)
git clone https://github.com/ninele7/snoopy-e.git
yarn

победа над lf/crlf
yarn lint --fix
(может быть еще git config core.autocrlf false )

запуск без билдинга
yarn electron:serve

создание инсталлера
yarn electron:build:w

подписывание инсталляхи (предварительно signtool поместить туда)
signtool.exe sign /fd sha256 /p sjwDS9dh3s1 /f "D:\Dev\iacert.pfx" "D:\snoopy.exe"
