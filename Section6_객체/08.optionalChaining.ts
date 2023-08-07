{
  const obj: { name: string } = {
    name: 'value',
  };

  interface Response {
    data: {
      userList: [
        {
          name: string;
          info: {
            tel: string;
            email: string;
          };
        }
      ];
    };
  }

  const response: Response = {
    data: {
      userList: [
        {
          name: 'Jang',
          info: {
            tel: '010',
            email: 'jang@gmail.com',
          },
        },
      ],
    },
  };

  console.log(obj?.name);

  function getUserEmailByIndex(userIndex: number) {
    return response.data.userList[userIndex].info.email;
  }
  console.log(getUserEmailByIndex(0));

  console.log(response?.data.userList[0].info.email);
}
