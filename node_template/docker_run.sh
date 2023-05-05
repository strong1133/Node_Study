
echo "Enter RUN Version:"
read VER

echo ":::: DOCKER RUN START / ${VER} ::::"


docker kill strong_sub
docker rm strong_sub

###
docker pull strong_sub:v_${VER}
docker run -it --name "strong_sub" -e NODE_ENV=dev --restart always -p 4000:4000 strong_sub:v_${VER}

echo ":::: DOCER RUN  END  ::::"