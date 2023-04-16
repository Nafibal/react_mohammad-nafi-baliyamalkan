# Resume Materi KMReact – GraphQL Query and Mutation

---

### Pengertian

Dalam GraphQL, query adalah cara kita mendapatkan data yang kita inginkan. Kita dapat memilih _field_ mana saja yang ingin kita dapatkan, tidak seperti REST API yang mengharuskan kita mendapatkan seluruh data dalam sebuah endpoint. Sedangkan mutation adalah fungsionalitas dalam GraphQL untuk mengubah, menambahkan, dan menghapus data.

### Query

1. Import gql dan useQuery, lalu tuliskan query yang diinginkan

```javascript
import { gql, useQuery } from "@apollo/client";

const GetTodolist = gql`
  query MyQuery {
    todolist {
      is_done
      id
      title
    }
  }
`;
```

2. Ambil datanya menggunakan useQuery

```javascript
const { data, loading, error } = useQuery(GetTodolist);
```

3. Tampilkan data menggunakan jsx

```javascript
<ul className="todo-list js-todo-list">
    {data?.todolist.map((v)=>(
        <Todo
            key={v.id}
            id={v.id}
            onClickItem={() onClickItem(v.id)}
            onDeletItem={() onDeletItem(v.id)}
            title={v.title}
            checked={v.is_done}
        />
    ))}
</ul>
```

### Mutation

1. import useMutation dari apollo client

```javascript
import { gql, useQuery, useMutatin } from "@apollo/client";

const InsertTodo = gql`
  mutation MyMutation($object: todolist_insert_input!) {
    insert_todolist_one(object: $object) {
      id
    }
  }
`;
```

2. panggil useMutatuon menggunakan _destructuring_ untuk menggunakan query

```javascript
const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
  refetchQueries: [GetTodoList],
});
```

3. Panggil InsertTodo disertakan variabel

```javascript
insertTodo({
  variables: {
    object: {
      title: title,
      user_id: 1,
    },
  },
});
```
