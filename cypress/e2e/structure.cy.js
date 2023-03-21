describe("test scenario",()=>{
    before(()=>{
        cy.log("before")
    })

    beforeEach(()=>{
        cy.log("beforeEach")
    })

    it("testcase1",()=>{
        cy.log("test case1")
    })

    it("testcase2",()=>{
        cy.log("test case2")
    })

    after(()=>{
        cy.log("after")
    })

    afterEach(()=>{
        cy.log("afterEach")
    })
})