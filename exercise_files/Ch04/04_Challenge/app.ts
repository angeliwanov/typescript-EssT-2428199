function query<T>(
    items: T[],
    query: {
        [key in keyof T]?: (val: T[key]) => boolean
    } // <--- replace this!
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })


    class Foods {
        constuctor(root, data) {
          this.root = root;
          this.data = data;
        }
      
        render() {
          for (let el of this.data) {
            let img = document.createElement("img");
            img.setAttribute("src") = el.image;
            this.root.appendChild(img);
          }
        }
      }
      
      let int = new Food(rootElement, foodData);
      int.render(); 