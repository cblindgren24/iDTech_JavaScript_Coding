
function greet(name) {
    if (typeof(name) == "string") {
        if (name == name.toUpperCase()) {
            return "HELLO " + name.toUpperCase() + '!';
        }
        else {
            return "Hello " + name;
        }
    } else if (Array.isArray(name)) {
        let names = 'Hello'
        for (let i = 0; i < name.length; i++) {
            names += " " + name[i];
        }
        return names
    }
} 
    

test('handle null', () => {
    expect(greet()).toEqual("Hello there");
  });
  
  test('outputs the correct string', () => {
    expect(greet('Elizabeth')).toBe("Hello Elizabeth");
  });
  
  test('outputs the correct array', () => {
    expect(greet(['Elizabeth', 'Anna'])).toBe("Hello Elizabeth, Anna");
  });
  
  test('handles all caps', () => {
    expect(greet('ANNA')).toBe("HELLO ANNA!");
  });
  
  
