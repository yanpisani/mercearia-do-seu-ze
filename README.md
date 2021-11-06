# Mercearia do Seu Zé
###### Repositório para Confeccão de Trabalho Final Prático para a Aula de Engenharia de Software

O trabalho consiste na criação de um sistema que tem o objetivo de auxliar a gerencia do mercadinho do seu Zé, oferecendo informações importantes como estoque da loja, numero de funcionários, numero de faltas, clientes e fidelidade.

# Linguagens:
#### Frontend:
- CSS
> Versão 4.15
- HTML5
> Versão 5.2
- Javascript
> Versão ES6
#### Backend:
- Python
> Versão 3.10

# Frameworks:
#### Frontend:
- React
> Versão 17.0.2
#### Backend:
- Django REST 
> Versão 3.12.4

# Banco de Dados:
- PostgreSQL
> Versão 14.0

# Rodando o front-end

1. Garanta que você está na pasta front-end:

```sh
cd ./frontend
```

2. Instale as depedências do javascript:

```sh
npm install
```

3. Rode o projeto:

```sh
npm start
```


# Rodando o back-end

1. Crie uma venv e instale os requisitos fora do repositorio:

```sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

2. Rode as migrações do django:

```sh
python3 manage.py makemigrations
python3 manage.py migrate
```

3. Roda o projeto ou executa os testes:

```sh
python3 manage.py runserver
```


