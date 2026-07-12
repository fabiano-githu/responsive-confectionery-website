# responsive-confectionery-website
Responsive confectionery website developed with HTML, CSS and JavaScript.



.color1 { #f8b195 };
.color2 { #f67280 };
.color3 { #c06c84 };
.color4 { #6c5b7b };
.color5 { #355c7d };

# 🎨 Paleta de Cores do Projeto

## Cores Principais

| Nome | Variável CSS | Código |
|------|--------------|---------|
| 🔵 Azul Petróleo | `--primary-color` | `#355c7d` |
| 🟣 Roxo | `--secondary-color` | `#6c5b7b` |
| 🌸 Rosa Escuro | `--accent-color` | `#c06c84` |
| 🩷 Rosa | `--highlight-color` | `#f67280` |
| 🌼 Rosa Claro | `--background-color` | `#f8b195` |

---

## Cores Neutras

| Nome | Variável CSS | Código |
|------|--------------|---------|
| ⚪ Branco | `--white` | `#ffffff` |
| ⚫ Preto | `--black` | `#000000` |
| 📝 Cor do Texto | `--text-color` | `#333333` |
| 📏 Cor da Borda | `--border-color` | `#dddddd` |

---

## Declaração no CSS

```css
:root{

    --primary-color:#355c7d;
    --secondary-color:#6c5b7b;
    --accent-color:#c06c84;
    --highlight-color:#f67280;
    --background-color:#f8b195;

    --white:#ffffff;
    --black:#000000;
    --text-color:#333333;
    --border-color:#dddddd;

}
```

---

## Exemplo de Uso

```css
body{
    background-color:var( --background-color:#f8b195;);
    color:var(--text-color);
}

header{
    background-color:var(--primary-color);
}

nav a{
    color:var(--white);
}

button{
    background-color:var(--highlight-color);
    color:var(--white);
}

footer{
    background-color:var(--secondary-color);
    color:var(--white);
}
```

> 💡 **Boa prática:** mantenha toda a paleta de cores dentro do `:root` no início do arquivo `style.css`. Assim, se precisar alterar uma cor, basta modificá-la em um único lugar.