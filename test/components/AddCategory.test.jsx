import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    // buscando la caja de texto
    const input = screen.getByRole("textbox");

    // fireEvent -> dispara un evento
    fireEvent.input(input, { target: { value: "sakura" } });

    expect(input.value).toBe("sakura");
  });

  //  probando el submit
  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "sakura";
    const onNewCategory = jest.fn(); // jest.fn() es un Mock

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // verifica que despues del submit la caja de texto sea un string vacio
    expect(input.value).toBe("");

    // ferificando que la funcion sea llamada
    expect(onNewCategory).toHaveBeenCalled();
    // verificar que la funcion sellamanada una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // veridicar que la funcion haya sido llada con el valor del input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCAtegory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    // otra forma es
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
