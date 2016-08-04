UPDATE products
SET name=$2,
    description=$3,
    price=$4,
    imgurl=$5
WHERE id=$1;
