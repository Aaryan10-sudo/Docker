# This is a small project carried out inorder to showcase and learn Markdown Docker and CI/CD pipeline

## Here I'll be sharing all the information I gained while learning docker

So Docker installation is easy install the Docker Desktop for GUI.
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

### You have successfully run a new container with ubuntu image alongside interactive mode [-it]() and ubuntu shell [bash]()

In your shell run command ls and get all the dir in your ubuntu image for more fun

```bash
mkdir Test
cd Test
touch test.txt
cat test.txt
echo '{This is a test}' > test.txt
```

### !!!Boom you just created a dir with test.txt and wrote This is a test using ubuntu image in container

### Now let's fetch all our active containers

```bash
docker container ls
```

This will fetch all the active containers in your Docker Desktop

Wanna fetch the inactive containers as well?

```bash
docker container ls -a
```

This will display all the containers in your Docker Desktop whether it's running or not

### We've learned to create a docker image run a container and Display the containers

So you have a container1 and container2 container1 is running where you have test.txt and container2 is stopped where you have test2.txt
You wanna fetch test2.txt but you have the container2 stopped what's next ?

```bash
docker start <container_id / container_name>
```

This will start your desired container and you can fetch the data you wanted to
After fetching it you can simply stop the container with

```bash
docker stop <container_id / container_name>
```

isn't it simple???
