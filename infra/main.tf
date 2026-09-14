provider "aws" {
  region = "us-east-2"
}

# ex. just to show infra as code
resource "null_resource" "demo" {
  provisioner "local-exec" {
    command = "echo running a fake deploy step"
  }
}
