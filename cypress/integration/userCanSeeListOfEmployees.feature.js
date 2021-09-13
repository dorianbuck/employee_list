describe("user can visit the application and see a list of emloyees", () => {
  before(() => {
    cy.intercept("GET", "*/users**", { fixture: "users.json" });
    cy.visit("/");
  });

  it("is expected to display a title", () => {
    cy.get("[data-testid=header]").should("contain", "Employee Management");
  });
  describe("Employee list section", () => {
    it("is expected to display 4 employees", () => {
      cy.get("[data-testid=employee-list]").children().should("have.length", 4);
    });
  });
  it("is expected to return Thomas as a first employee", () => {
    cy.get("[data-testid=employee-list]")
      .children()
      .first()
      .should("contain.text", "Thomas Bluth")
      .next()
      .should("contain.text", "Janet Weaver")
      .next()
      .should("contain.text", "Emma Wong")
      .next()
      .should("contain.text", "Eva Holt");
  });
  it("is expected that the list items display an image", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").first().find(".avatar").should("be.visible");
    });
  });
});
