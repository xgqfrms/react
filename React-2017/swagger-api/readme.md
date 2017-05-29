# swagger api

https://github.com/xgqfrms-GitHub/swagger-node-api/tree/master





https://www.udemy.com/nodejs-codeless-api-creation-up-and-running-with-swagger/learn/v4/t/lecture/6369182?start=0

https://www.npmjs.com/package/swagger


Swagger是OpenAPI规范（OAS）的API开发人员工具世界上最大的框架，可在整个API生命周期内进行开发，从设计和文档到测试和部署。


http://swagger.io/

http://editor.swagger.io/




https://github.com/swagger-api/swagger-js
https://github.com/swagger-api/swagger-editor
https://github.com/swagger-api/swagger.io


https://github.com/swagger-api


https://www.npmjs.com/package/swagger-ui

https://github.com/swagger-api/swagger-ui

https://github.com/swagger-api/swagger-node



```sh


$ npm i -g swagger

# swagger cli 

$ swagger project create node-api

# express

$ swagger project start node-api

# curl

$ curl http://127.0.0.1:10010/hello?name=xgqfrms

#cd node-api

$ swagger project edit



http://127.0.0.1:13746/#/edit

# redirect

http://127.0.0.1:13746/#!/


# localhost:10010 Error

http://127.0.0.1:10010/hello?name=xgqfrms

```


https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#operation-object-example


"parameters": [
    {
      "name": "petId",
      "in": "path",
      "description": "ID of pet that needs to be updated",
      "required": true,
      "type": "string"
    },
    {
      "name": "name",
      "in": "formData",
      "description": "Updated name of the pet",
      "required": false,
      "type": "string"
    },
    {
      "name": "status",
      "in": "formData",
      "description": "Updated status of the pet",
      "required": false,
      "type": "string"
    }
  ],


parameters:
- name: petId
  in: path
  description: ID of pet that needs to be updated
  required: true
  type: string
- name: name
  in: formData
  description: Updated name of the pet
  required: false
  type: string
- name: status
  in: formData
  description: Updated status of the pet
  required: false
  type: string








.swagger-ui .loading-container .loading:before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    margin: -30px;
    content: "";
    -webkit-animation: rotation 1s infinite linear,opacity .5s;
    /* animation: rotation 1s infinite linear,opacity .5s; */
    opacity: 1;
    border: 2px solid rgba(85,85,85,.1);
    border-top-color: rgba(0,0,0,.6);
    border-radius: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}


.swagger-ui .loading-container .loading:after {
    font-size: 10px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    content: "loading";
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-transform: uppercase;
    font-family: Titillium Web,sans-serif;
    color: #3b4151;
}

.swagger-ui .loading-container .loading {
    position: relative;
}


.swagger-ui .loading-container {
    padding: 40px 0 60px;
}


<div class="loading-container"><div class="loading"></div></div>

.swagger-ui .loading-container .loading:before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    margin: -30px;
    content: "";
    -webkit-animation: rotation 1s infinite linear,opacity .5s;
    /* animation: rotation 1s infinite linear,opacity .5s; */
    opacity: 1;
    border: 2px solid rgba(85,85,85,.1);
    border-top-color: rgba(0,0,0,.6);
    border-radius: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.swagger-ui .loading-container .loading:after {
    font-size: 10px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    content: "loading";
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    text-transform: uppercase;
    font-family: Titillium Web,sans-serif;
    color: #3b4151;
}
