cd ghost
# ghost stop
ghost uninstall --force
# rm -drfv content current versions node_modules
# rm -fv .ghost-cli .ghostpid config.development.json package-lock.json package.json
rm -fv package-lock.json package.json