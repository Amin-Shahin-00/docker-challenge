# Use a lightweight Python base image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy only the requirements file first
COPY requirements.txt .

# Install dependencies securely and without caching
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application source code
COPY . .

# SECURITY: Create a non-root user and switch to it
RUN adduser --disabled-password --no-create-home appuser
USER appuser

# Expose the required API port
EXPOSE 8000

# Define the runtime command to start the server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]