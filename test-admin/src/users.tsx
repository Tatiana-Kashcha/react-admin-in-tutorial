import { List, Datagrid, TextField, EmailField } from "react-admin";
// Відображення колонками
export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

// import { List, SimpleList } from "react-admin";

// export const UserList = () => (
//   <List>
//     <SimpleList
//       primaryText={(record) => record.name}
//       secondaryText={(record) => record.id}
//       tertiaryText={(record) => record.email}
//     />
//   </List>
// );

// import { useMediaQuery } from "@mui/material";
// import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";

// export const UserList = () => {
//   const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
//   return (
//     <List>
//       {isSmall ? (
//         <SimpleList
//           primaryText={(record) => record.name}
//           secondaryText={(record) => record.id}
//           tertiaryText={(record) => record.email}
//         />
//       ) : (
//         <Datagrid rowClick="edit">
//           <TextField source="id" />
//           <TextField source="name" />
//           <EmailField source="email" />
//         </Datagrid>
//       )}
//     </List>
//   );
// };
