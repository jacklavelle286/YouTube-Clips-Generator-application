FROM python:3-alpine

WORKDIR /frontend

COPY . .

EXPOSE 80

CMD ["python", "-m", "http.server", "80"]
