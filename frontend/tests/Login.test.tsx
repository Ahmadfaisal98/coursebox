import userEvent from "@testing-library/user-event";

import { Feedback } from "@/components/Input";
import { render, screen, act } from "@/test-utils";

import Login from "@/pages/login";

describe("Login page", () => {
  it("Render check", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
