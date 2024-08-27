interface Props {
  name: string;
  address: string;
  phone: string;
  subject: string;
  message: string;
  userEmail: string;
}

export const createTask = async (values: Props) => {
  const { name, address, userEmail, phone, subject, message } = values;

  const todo = await fetch(`/api/api-tasks`, {
    method: "POST",
    body: JSON.stringify({ name, address, userEmail, phone, subject, message }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return todo;
};

export const deleteTodo = async (userId: string): Promise<boolean> => {
  const todo = await fetch(`/api/api-tasks/${userId}`, {
    method: "DELETE",
    headers: {
   "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return true;
};

export const updateTask = async (
  id: string,
  complete: boolean
): Promise<boolean> => {
  const body = { complete };

  const todo = await fetch(`/api/api-tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json", 
    },
  }).then((res) => res.json());

  return todo;
};

export const deleteAllTasks = async (complete: any): Promise<boolean> => {
  const todo = await fetch(`/api/api-tasks`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return true;
};
