require('shelljs/global');

rm('-rf', 'out');
exec('git clone "https://' + env.GH_TOKEN +
     '@' + env.GH_REF + '" --depth 1 -b master out');
pushd('out');
exec('git config user.name "Automatic Commit"');
exec('git config user.email "7holidays@g0v.tw"');
exec('git rm -rf .');
cp('-r', '../dist/*', '.');
exec('git add .');
exec('git commit -m "Automatic commit: ' + Date() + '"');
exec('git push "https://' + env.GH_TOKEN +
     '@' + env.GH_REF + '" master', {silent: true});
popd();
exit(0);
