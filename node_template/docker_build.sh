echo "Enter Build  Version:"
read VER

echo "NODE MODULES REMOVE"

rm -rf  ./node_modules
rm ./package-lock.json

echo ":::: DOCER BUILD START / ${VER} ::::"

### 
sudo docker build -t strong_sub:v_${VER}  .

docker push strong_sub:v_${VER}

echo ":::: DOCER BUILD  END  ::::"