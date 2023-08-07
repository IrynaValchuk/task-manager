import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBoard,
  addColumn,
  addTask,
  deleteBoard,
  deleteColumn,
  deleteTask,
  editBoard,
  editColumn,
  editTask,
  getBoard,
} from 'api/workplace.js';
import { getCurrentUser } from 'redux/auth/auth-operation';

export const addNewBoard = createAsyncThunk(
  'board/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addBoard(credentials);
      thunkAPI.dispatch(getCurrentUser());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/get',
  async (id, thunkAPI) => {
    try {
      const { data } = await getBoard(id);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoardById = createAsyncThunk(
  'boards/edit',
  async (editedBoard, thunkAPI) => {
    try {
      const { data } = await editBoard(editedBoard);
      thunkAPI.dispatch(getCurrentUser());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoardById = createAsyncThunk(
  'boards/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteBoard(id);
      thunkAPI.dispatch(getCurrentUser());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewColumn = createAsyncThunk(
  'column/add',
  async (credentials, thunkAPI) => {
    try {
      // console.log('cred', credentials);
      const { data } = await addColumn(credentials);
      // console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumnById = createAsyncThunk(
  'column/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editColumn(editedColumn);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteColumnById = createAsyncThunk(
  'column/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteColumn(id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  'task/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await addTask(credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editTaskById = createAsyncThunk(
  'task/edit',
  async (editedColumn, thunkAPI) => {
    try {
      const { data } = await editTask(editedColumn);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteTaskById = createAsyncThunk(
  'task/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await deleteTask(id);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dragTaskById = createAsyncThunk(
  'task/dragTask',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await editTask(credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
