## Referensi

- [faizan170/tensorflow-image-classification-flask-deployment](https://github.com/faizan170/tensorflow-image-classification-flask-deployment "faizan170's Github profile")
- [how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint](https://medium.com/fullstackai/how-to-deploy-a-simple-flask-app-on-cloud-run-with-cloud-endpoint-e10088170eb7 "simple-flask-app-on-cloud-run")

gcloud builds submit --tag gcr.io/our-philosophy-314515/ml-api

gcloud run deploy --image gcr.io/our-philosophy-314515/ml-api --platform managed --region asia-southeast2

Build Docker on your local machine
$ docker build -t gcr.io/$MY_PROJECT_ID/flaskapp_cr:v1 -f Dockerfile .

Push the Docker image to Container Registry
$ docker push gcr.io/$MY_PROJECT_ID/flaskapp_cr:v1

Deploy a Docker image on Cloud Run
$ gcloud run deploy flaskapp-cr-v1 \
 --image gcr.io/$MY_PROJECT_ID/flaskapp_cr:v1 \
 --region us-east1 \
 --platform managed \
 --memory 128Mi
