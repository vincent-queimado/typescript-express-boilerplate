import checkPassword from '../../src/functions/check_password';

describe('CHECK PASSWORD', () => {
    it('CHECK CORRECT PASSWORD', async () => {
        const hashPassword = '$2a$10$mcPm0BnyX2xAAAX92yILe.bMSIdH4IwsBF1jbT.2M7LkyQtrxj90m';
        const plainPassword = 'Johndoe@1234';

        const res = await checkPassword(plainPassword, hashPassword);
        expect(res).toMatchObject({ success: true, data: plainPassword, error: null });
    });

    it('CHECK WRONG PASSWORD', async () => {
        const hashPassword = '$2a$10$mcPm0BnyX2xAAAX92yILe.bMSIdH4IwsBF1jbT.2M7LkyQtrxj90m';
        const plainPassword = 'xxxx';

        const res = await checkPassword(plainPassword, hashPassword);
        expect(res).toEqual(
            expect.objectContaining({
                success: false,
                data: null,
            }),
        );
    });
});
