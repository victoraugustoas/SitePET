# Animate

### Para que Usar
Serve para adicionar animações pré definidas no animate.css.

#### Parâmetros
1. effects: O efeito definido em animate.css;
2. children: Todo código posto no entre `<Animate> </Animate>` será colocado dentro do Animate para que a animação ocorra naquele objeto.

#### Exemplo
```javascript
<Animate effect='bounce'>
                <div id="logoTop" className="logo">
                    <Link to="/">
                        <img src={logo} alt={'logo'} />
                    </Link>
                </div>
</Animate>
```