# YouTube-Clips-Generator-application

# workflow

1. User uploads link webpage
2. Upload video to S3 via javascript SDK via frontend (multipart upload)
3. S3 event notification to trigger Step functions workflow via EventBridge
4. Lambda passes video to Bedrock Model to take video and analyze for segments, returning timestamps to Lambda
5. Lambda passes video and timestamps to backend container running in state machine
5. use ffmpeg to generate clips, and container image and once job is done returns to s3 
6. Download able assets via front end via presigned URL