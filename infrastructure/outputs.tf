output "website_url" {
  description = "Website URL"
  value       = "http://${aws_s3_bucket_website_configuration.chatbot_website.website_endpoint}"
}

output "cloudfront_url" {
  description = "CloudFront distribution URL"
  value       = "https://${aws_cloudfront_distribution.chatbot_cdn.domain_name}"
}

output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.chatbot_website.bucket
}