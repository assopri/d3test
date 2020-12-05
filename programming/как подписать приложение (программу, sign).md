подпись снупи

signtool.exe sign /fd sha256 /p sjwDS9dh3s1 /f "D:\Dev\iacert.pfx" "Snoopy Setup 0.1.0.exe"
(signtool найти через еверисин и положить)



1. Проверь установлен ли signtool, он тут : C:\Program Files (x86)\Windows Kits\8.1\bin\x86\
2. Я подписываю файл вот так : 
-открыл CMD написал : cd C:\Program Files (x86)\Windows Kits\8.1\bin\x86\
- после подписал готовый exe файл : signtool.exe sign /fd sha256 /p sjwDS9dh3s1 /f "D:\Dev\iacert.pfx" "d:\Dev\2020\SnoopyFinal\snoopy-e\dist_electron\snoopy-e Setup 0.1.0.exe"

signtool.exe sign /fd sha256 /p sjwDS9dh3s1 /f "D:\Dev\iacert.pfx" "D:\snoopy.exe"

signtool stuff https://stackoverflow.com/questions/10474488/why-does-signtool-in-command-prompt-return-windows-cannot-find-signtool-make