import React, { useEffect, useState } from 'react';
import './style.scss';
import TableComponent from '../../../../components/Table/index.jsx';
import apiUser from '../../../../services/api/user';
import InputMask from 'react-input-mask';

export default function Employees() {
  const [productData, setUsersData] = useState({
    header: [],
    data: [],
  });
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();

  //data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [birthDate, setBirthDate] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [rg, setRg] = useState();
  const [role, setRole] = useState();
  const [roleDecrtiption, setRoleDescription] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setLoading(true);
    const res = await apiUser.getUsers();
    let auxData = [];

    for (let i = 0; i < res.length; i++) {
      auxData[i] = [res[i].id, res[i].email, res[i].role_description];
    }
    setUsersData(auxData);
    setLoading(false);
  }

  async function postUser() {
    setLoading(true);
    let data = {
      name: name,
      role: role,
      role_description: roleDecrtiption,
      phone: phone,
      email: email,
      cpf: cpf,
      rg: rg,
      birth_date: birthDate,
      address: address,
      manager: true,
      password: '123456',
    };

    await apiUser.postUser(data);
    getUsers();
    setLoading(false);
  }

  async function deleteUserById(id) {
    setLoading(true);
    await apiUser.deleteUser(id);
    getUsers();
    setLoading(false);
  }

  async function putUser() {
    setLoading(true);
    let data = {
      name: name,
      role: role,
      role_description: roleDecrtiption,
      phone: phone,
      email: email,
      cpf: cpf,
      rg: rg,
      birth_date: birthDate,
      address: address,
      manager: true,
      password: '123456',
    };
    await apiUser.putUser(editId, data);
    getUsers();
    setEditId(null);
    setIsEditing(false);
    setLoading(false);
  }

  async function toggleEditing(id) {
    setIsEditing(true);
    setEditId(id);
    let res = await apiUser.getUsersById(id);
    setName(res.name);
    setRole(res.role);
    setRoleDescription(res.role_description);
    setPhone(res.phone);
    setEmail(res.email);
    setCpf(res.cpf);
    setRg(res.rg);
    setBirthDate(res.birth_date);
    setAddress(res.address);
  }

  return (
    <div className="all-employees">
      <div className="content-flex">
        <div className="flex">
          <h2>
            <b>Funcionários</b>
          </h2>
          <button
            onClick={() => {
              setPosting(!posting);
            }}
          >
            <b>+ Funcionário</b>
          </button>
        </div>
        <br />
        {!loading && (
          <TableComponent
            data={{
              header: ['id', 'Email', 'Cargo/Função'],
              data: productData,
            }}
            deleteFunction={deleteUserById}
            editFunction={toggleEditing}
          />
        )}
        {(posting || isEditing) && (
          <div>
            <br />
            <br />
            <h3>
              <b>Adicionar Produto</b>
            </h3>
            <br />
            <form>
              <div className="input-posting">
                <label>Nome:</label>
                <InputMask
                  placeholder="Nome"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Endereço:</label>
                <InputMask
                  placeholder="Endereço"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  value={address}
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Data de Nascimento:</label>
                <InputMask
                  placeholder="Data de Nascimento:"
                  onChange={(event) => {
                    setBirthDate(event.target.value);
                  }}
                  value={birthDate}
                  mask="9999-99-99"
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>CPF:</label>
                <InputMask
                  placeholder="CPF"
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                  value={cpf}
                  mask="999.999.999-99"
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Email:</label>
                <InputMask
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Telefone:</label>
                <InputMask
                  placeholder="Telefone"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  value={phone}
                  mask="(99)99999-9999"
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>RG:</label>
                <InputMask
                  placeholder="RG"
                  onChange={(event) => {
                    setRg(event.target.value);
                  }}
                  value={rg}
                  mask="99.999.999-9"
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Cargo/Função:</label>
                <InputMask
                  placeholder="Cargo/Função"
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}
                  value={role}
                ></InputMask>
              </div>
              <div className="input-posting">
                <label>Descrição do Cargo/Função:</label>
                <InputMask
                  placeholder="Descrição do Cargo/Função"
                  onChange={(event) => {
                    setRoleDescription(event.target.value);
                  }}
                  value={roleDecrtiption}
                ></InputMask>
              </div>

              <button
                type="submit"
                onClick={() => {
                  if (isEditing) putUser();
                  else postUser();
                }}
              >
                Adicionar
              </button>
            </form>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
