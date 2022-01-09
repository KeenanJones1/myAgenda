import Todo from './TodoModel';
import functions from '../../utils/functions'
// need to test functions 
// typescript type checks parameters for objects, no need to test objects.

describe('main', () => {
 const newTodo = new Todo('clean room', 2);

 test('expects complete todo item to return a truthy value', () => {
  expect(newTodo.complete()).toBeTruthy();
 });

 test('expects complete todo item to be a function', () => {
  expect(typeof newTodo.complete).toEqual('function');
 });

 test('expects uncomplete todo item to be a function', () => {
  expect(typeof newTodo.uncomplete).toEqual('function');
 });

 test('expects uncomplete todo item to return a truthy value', () => {
  expect(newTodo.uncomplete()).toBeTruthy();
 });

 test('expects uncomplete function on a todo item to change the complete attribute to be false', () => {
  newTodo.uncomplete()
  expect(newTodo.completed).toBe(false);
 });

 test('expects the complete function on a todo item to change the complete attribute to be true', () => {
  newTodo.complete()
  expect(newTodo.completed).toBe(true);
 })

 test('expects the complete function on a todo item to change the complete attribute to be true', () => {
  newTodo.complete()
  expect(newTodo.completed).toBe(true);
 })

 test('expects the formatTime function to convert 24 hour time to 12 hour time with am and pm', () => {
  const time = '22:55'
  expect(functions.formateTime(time)).toBe('10:55 pm');
 })

})