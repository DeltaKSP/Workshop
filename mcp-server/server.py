#!/usr/bin/env python3
"""
Amazon Q Developer MCP Server
"""

import asyncio
import json
from mcp import ClientSession, StdioServerParameters
from mcp.server import Server
import mcp.server.stdio
import mcp.types as types

server = Server("amazon-q-chatbot")

AWS_SERVICES = {
    "ec2": {"name": "Amazon EC2", "category": "Compute", "description": "Virtual servers in the cloud"},
    "lambda": {"name": "AWS Lambda", "category": "Serverless", "description": "Run code without servers"},
    "s3": {"name": "Amazon S3", "category": "Storage", "description": "Object storage service"}
}

@server.list_tools()
async def handle_list_tools():
    return [
        types.Tool(
            name="get_aws_service",
            description="Get AWS service information",
            inputSchema={
                "type": "object",
                "properties": {"service": {"type": "string"}},
                "required": ["service"]
            }
        )
    ]

@server.call_tool()
async def handle_call_tool(name: str, arguments: dict):
    if name == "get_aws_service":
        service = arguments.get("service", "").lower()
        if service in AWS_SERVICES:
            info = AWS_SERVICES[service]
            response = f"📊 **{info['name']}** ({info['category']})\n{info['description']}"
        else:
            response = f"Serviço '{service}' não encontrado"
        return [types.TextContent(type="text", text=response)]

async def main():
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())

if __name__ == "__main__":
    asyncio.run(main())