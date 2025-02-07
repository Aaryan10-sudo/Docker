# This is a small project carried out inorder to showcase and learn Markdown Docker and CI/CD pipeline

## Here I'll be sharing all the information I gained while learning docker

So ![Docker Icon](https://upload.wikimedia.org/wikipedia/commons/6/64/Docker_Logo.png) Docker installation is easy I just installed the Docker Desktop for GUI.
You can also head to [this link](https://www.docker.com/products/docker-desktop/) and install Docker Desktop

### There are two main concept in Docker

- Images
- Container

#### Images

Images in Docker doesn't refers to the pictures it is package that includes everything needed to run a software application, such as code, runtime, libraries, dependencies, and environment variables.

#### Containers

Containers in Docker is like a small, lightweight virtual machine that runs an application. It is created from a Docker image and contains everything needed to run the app.

### First Docker command

```bash
docker run ubuntu
```

# What does this command do?

So, here in [docker run ubuntu]() the [ubuntu]() is a image
The command will run a new container with this image meaning that you can now access to ubuntu using this container

```bash
docker run -it ubuntu bash
```

The command seems familiar there's just 2 new words [-it]() and [bash]()

# So what does this command do?

The command will run a new container with image same as previous command but it will open a ubuntu shell in your cmd prompt
root@exampleId :
