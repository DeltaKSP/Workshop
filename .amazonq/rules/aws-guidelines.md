# AWS Development Guidelines

## Security Best Practices
- Use IAM roles instead of access keys
- Enable MFA for all accounts
- Follow principle of least privilege
- Use VPC for network isolation

## Cost Optimization
- Use Reserved Instances for predictable workloads
- Implement auto-scaling
- Monitor with CloudWatch
- Use Spot Instances when appropriate

## Serverless Guidelines
- Prefer Lambda for event-driven workloads
- Use DynamoDB for NoSQL needs
- Implement proper error handling
- Monitor with X-Ray

## Code Quality
- Write comprehensive tests
- Use TypeScript for better type safety
- Implement proper logging
- Follow AWS SDK best practices