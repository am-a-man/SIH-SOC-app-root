ipconfig /all|find "Physical Address">>macadd.txt
for /f "tokens=2 delims=:" %%i in (macadd.txt) do
@echo The MAC Address is %%i