gcloud builds submit --tag gcr.io/our-philosophy-314515/frontend

gcloud beta run deploy --image gcr.io/our-philosophy-314515/frontend --platform managed --region asia-southeast2
