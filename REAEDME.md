#### create tsconfig.json file
```npx tsc --init```

#### initialize node.js application
```yarn init```

#### install ts-node dev
```yarn add ts-node-dev typescript -D```

#### add scripts in the ***package.json*** file to prepare the node.js server
```
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
  }
```

#### run node.js server
```yarn dev```



