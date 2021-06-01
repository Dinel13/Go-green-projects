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
