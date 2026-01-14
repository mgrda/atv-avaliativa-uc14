# API (server)

Passos iniciais para instalar e executar a API que recebe dados dos recursos do app (câmera, GPS, rede) e armazena no PostgreSQL serverless (Neon).

1. Instalar dependências

```bash
cd api
npm install
```

2. Criar arquivo de ambiente

```bash
cp .env.example .env
# editar .env e preencher NEON_DATABASE_URL
```

3. Iniciar o servidor

```bash
npm start
```


Endpoints

- `POST /camera` — receber JSON do recurso câmera e armazenar
- `POST /gps` — receber JSON do recurso GPS e armazenar
- `POST /network` — receber JSON do recurso de rede e armazenar
- `GET /camera?limit=50` — listar últimos registros de câmera (por padrão 100)
- `GET /gps` — listar registros de GPS
- `GET /network` — listar registros de rede

Formato dos dados recebidos

1) Câmera (POST /camera)

```json
{
  "fotoBase64": "string-longa-base-64",
  "cameraFoto": "frontal", // ou "traseira"
  "dataHoraFoto": "2026-01-14T12:34:56Z"
}
```

Observações sobre câmera:
- `fotoBase64`: receber uma string em Base64 (a aplicação React Native envia a foto já em Base64).
- `cameraFoto`: valor permitido é `frontal` ou `traseira`.
- `dataHoraFoto`: ISO 8601 com data e hora da requisição/registro.

2) GPS (POST /gps)

```json
{
  "latitude": "0.156846",
  "longitude": "25.58544",
  "dataHoraLocalizacao": "2026-01-14T12:34:56Z"
}
```

Observações sobre GPS:
- `latitude` e `longitude`: valores em string contendo números decimais (pode também ser enviado como número). 
- `dataHoraLocalizacao`: ISO 8601 com data e hora da posição.

3) Rede de internet (POST /network)

```json
{
  "ipRede": "123.456.789.012",
  "tipoRede": "wi-fi", // ou "rede móvel"
  "dataHoraRede": "2026-01-14T12:34:56Z"
}
```

Observações sobre rede:
- `tipoRede`: valor permitido `wi-fi` ou `rede móvel`.
- `ipRede`: IP relatado pelo dispositivo (string).
- `dataHoraRede`: ISO 8601 com data e hora do evento.

Leitura / acesso aos dados

- Os endpoints `GET /camera`, `GET /gps` e `GET /network` retornam os registros no mesmo formato JSON enviado pela aplicação (campo `payload` armazenado como JSONB). Use o parâmetro `limit` para controlar quantos registros retornar.

Exemplo `curl` de envio (substitua o host/porta):

```bash
curl -X POST http://localhost:3000/gps \
  -H "Content-Type: application/json" \
  -d '{"latitude":"-23.5","longitude":"-46.6","dataHoraLocalizacao":"2026-01-14T12:34:56Z"}'
```

Observações gerais

- Configure `NEON_DATABASE_URL` com a string fornecida pelo Neon (Postgres serverless). Use SSL quando necessário.
- A API aceita e retorna JSON; CORS está habilitado para permitir chamadas do app.

