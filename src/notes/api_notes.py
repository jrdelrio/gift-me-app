

# building endopoints notebook

@app.route("/products", method=['GET'])
def get_products ():
    products = Product.query.all() # SELECT * FROM producto
    product_list = list(map(lambda obj : obj.serialize(), products)) # lo convierto en una lista
    response = {
        "status": "ok",
        "products": product_list
    }
    return jsonify(response)

#ruta dinámica
@app.route("/product/<int:id_product>", method=['GET'])
def get_single_product(id_product):
    product = Product.query.get(id_product) # get() method works assume the argument is id by default
    return jsonify(product.serialize()), 200

# una de tipo POST
@app.route('/newproduct', method=['POST'])
def new_product():    
    body = json.loads(request.data) # esto es un diccionario
    new_product = Product(name = body['name'])
    db.session.add(new_product)
    db.session.commit()
    return "added new product", 200 # siempre debe retornar algo