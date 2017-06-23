# ignore-paths

Usage:



```
// if "/somepath" is matched, then middleware is ignored and the
// next app.use(...) path is followed.

app.use(ignorePaths("/somepath", middleware);

```

