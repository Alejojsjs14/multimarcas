# Documentación de Endpoints

Esta documentación describe los distintos endpoints disponibles para obtener información de la API, incluyendo categorías, productos, pedidos, métodos de pago y validaciones de cupones.

## Endpoints

### Obtener Categorías

**URL:** `/categorias/{tienda}.json`

**Método:** `GET`

**Descripción:** Obtiene las categorías de una tienda específica.

**Parámetros:**
- `tienda` (string): Nombre o identificador de la tienda.

**Ejemplo de Uso:**
```js
const { data, error, loading } = useCategorias('tienda1');
```

---

### Obtener Métodos de Pago

**URL:** `/generales/metodos-de-pago.json`

**Método:** `GET`

**Descripción:** Obtiene los métodos de pago disponibles.

**Ejemplo de Uso:**
```js
const { data, error, loading } = useMetodosDePago();
```

---

### Consultar Estado de un Pedido

**URL:** `/generales/pedidos.json`

**Método:** `GET`

**Descripción:** Obtiene el estado de un pedido según su ID.

**Parámetros:**
- `pedidoId` (string): ID del pedido.

**Ejemplo de Uso:**
```js
const { pedidoEncontrado, error } = usePedidos('123456');
```

---

### Obtener Productos por Tienda o Categoría

**URL:** `/productos/{tienda}.json`

**Método:** `GET`

**Descripción:** Obtiene la lista de productos de una tienda específica, con la opción de filtrarlos por categoría, marca o término de búsqueda.

**Parámetros:**
- `tienda` (string): Identificador de la tienda.
- `categoria` (string, opcional): Filtro por categoría.
- `marca` (string, opcional): Filtro por marca.
- `busqueda` (string, opcional): Término de búsqueda.

**Ejemplo de Uso:**
```js
const productos = useProducts({ tienda: 'tienda1', categoria: 'electronica' });
```

---

### Obtener Productos Más Comprados

**URL:** `/productos/{tienda}/mas-comprados.json`

**Método:** `GET`

**Descripción:** Obtiene los 4 productos más vendidos de una tienda.

**Parámetros:**
- `tienda` (string): Identificador de la tienda.

**Ejemplo de Uso:**
```js
const productosMasComprados = useProductosMasComprados('tienda1');
```

---

### Obtener Productos en Oferta

**URL:** `/productos/{tienda}/ofertas.json`

**Método:** `GET`

**Descripción:** Obtiene los 4 productos con mayores descuentos de una tienda.

**Parámetros:**
- `tienda` (string): Identificador de la tienda.

**Ejemplo de Uso:**
```js
const productosEnOferta = useProductosEnOferta('tienda1');
```

---

### Obtener Producto por Slug

**URL:** `/productos/{tienda}/{slug}.json`

**Método:** `GET`

**Descripción:** Obtiene un producto específico basado en su slug.

**Parámetros:**
- `tienda` (string): Identificador de la tienda.
- `slug` (string): Slug del producto.

**Ejemplo de Uso:**
```js
const producto = useProductoBySlug('tienda1', 'producto1');
```

---

### Validar Cupón

**URL:** `/generales/cupones.json`

**Método:** `GET`

**Descripción:** Valida un cupón en una tienda específica.

**Parámetros:**
- `cupon` (string): Código del cupón.
- `tienda` (string): Identificador de la tienda.

**Ejemplo de Uso:**
```js
const cuponValido = await validarCupon('CUPON123', 'tienda1');
```

---

### Obtener Departamentos

**URL:** `/departamentos.json`

**Método:** `GET`

**Descripción:** Obtiene la lista de departamentos.

**Ejemplo de Uso:**
```js
const { data, error, loading } = useObtenerDepartamentos();
```

---

### Obtener Municipios por Departamento

**URL:** `/municipios/{departamento}.json`

**Método:** `GET`

**Descripción:** Obtiene la lista de municipios pertenecientes a un departamento.

**Parámetros:**
- `departamento` (string): Identificador del departamento.

**Ejemplo de Uso:**
```js
const { data, error, loading } = useObtenerMunicipios('Antioquia');
```



