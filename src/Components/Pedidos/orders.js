export const ordersColumns = [
    { field: "id", headerName: "Pedido N°", width: 90 },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "adress",
      headerName: "Direccion",
      width: 300,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Telefono",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "plate",
      headerName: "Plato",
      type: "objct",
      width: 300,
      editable: true,
    },
    {
      field: "status",
      headerName: "Pagado",
      type: "boolean",
      width: 200,
      editable: true,
    },
  ];
  
  export const ordersRows = [
    {
      id: 1,
      name: "Snow",
      adress: "Av. San Martin 456",
      phone: 65465465,
      plate: ["Milanesas con papas"],
      status: true,
    },
    {
      id: 2,
      name: "Lannister",
      adress: "9 de Julio 789",
      phone: 45646546,
      plate: ["Milanesas con papas"],
      status: true,
    },
    {
      id: 3,
      name: "Lannister",
      adress: "25 de Mayo 452",
      phone: 2664498465,
      plate: ["Milanesas con papas"],
      status: false,
    },
    {
      id: 4,
      name: "Stark",
      adress: "Mendoza 963",
      phone: 35265465,
      plate: ["Milanesas con papas"],
      status: true,
    },
    {
      id: 5,
      name: "Targaryen",
      adress: "Los Treboles 852",
      phone: 798798,
      plate: ["Milanesas con papas"],
      status: false,
    },
    {
      id: 6,
      name: "Melisandre",
      adress: "Calle s/n 369",
      phone: 156546540,
      plate: ["Milanesas con papas"],
      status: true,
    },
    {
      id: 7,
      name: "Clifford",
      adress: "La Pamapa 456",
      phone: 46465464,
      plate: ["Milanesas con papas"],
      status: false,
    },
    {
      id: 8,
      name: "Frances",
      adress: "Belgrano 1938",
      phone: 87985465,
      plate: ["Milanesas con papas"],
      status: false,
    },
    {
      id: 9,
      name: "Roxie",
      adress: "25 de Agost0 333",
      phone: 968765463,
      plate: ["Milanesas con papas"],
      status: false,
    },
  ];