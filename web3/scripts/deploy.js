async function main() {
    const Voting = await ethers.getContractFactory("Voting");

    // Deploy the contract
    const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);

    // ✅ Wait until deployment is confirmed
    await Voting_.deployed();

    console.log("Contract deployed to address:", Voting_.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
});
