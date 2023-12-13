### Complete Express App
pern-demo

### Create Express App 

``` sh
express --view=pug pern-demo
```

#### Run the development server:

``` sh
pnpm i
```

```sh
pnpm start
```

- App running on 
http://localhost:3000

### make folder for creating the boilerplate and also file
- common 
  - dbConnection.js
- controller 
- models 
  - index.js
- service
- config.js

#### package.json do some changing

``` js
"start": "nodemon ./bin/www"
```

#### install Some package

```sh
pnpm install sequelize
```

```sh
pnpm install pg
```

```sh
pnpm i pg-hstore
```

#### Add another folder and files in the previous folder

- controller  
  - user 
    - userController.js
    - userValidation.js
- models
  - schemas 
     - userSchemas.js
- service
  - userService.js