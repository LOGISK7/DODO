@echo off
echo ==========================================
echo Fixing Git / VS Code 21-second Timeout
echo ==========================================
echo.
echo Removing unreachable IPv6 DNS servers from your Ethernet adapter...
netsh interface ipv6 delete dns "Ethernet" all
echo Setting IPv4 DNS to Cloudflare (1.1.1.1)...
netsh interface ipv4 set dns name="Ethernet" static 1.1.1.1
netsh interface ipv4 add dns name="Ethernet" 1.0.0.1 index=2
echo.
echo Flushing DNS cache...
ipconfig /flushdns
echo.
echo Done! Please try syncing your Git repository now.
pause
