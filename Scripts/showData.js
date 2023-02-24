function append(options, heading, cont) {

    let heading1 = document.createElement("h3");
    heading1.innerHTML = heading;
    cont.append(heading1);
    options.forEach(({ label, name, value, labelValue }) => {
      let div = document.createElement("div");
  
      div.setAttribute("class", "news-elements");
  
      let child1 = document.createElement("label");
      child1.for = label;
  
      let childOfChild1 = document.createElement("input");
      childOfChild1.type = "checkbox";
      childOfChild1.name = name;
      childOfChild1.value = value;
      childOfChild1.setAttribute("id", label);
  
      child1.append(childOfChild1, labelValue);
  
      div.append(child1);
      cont.append(div);
    });
  }
  
  export { append };