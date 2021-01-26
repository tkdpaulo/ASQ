# buildar e iniciar o serviço:

Build:
```shell
$ docker build . -t projeto:asq
``` 

Iniciando o serviço:
```shell
$ docker run -itd -p 8080:8080 --name projeto-asq projeto:asq
```


Obs: Não usual (teste)