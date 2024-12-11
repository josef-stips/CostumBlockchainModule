import { Block, BlockData, TransactionData } from "./block";

// blockchain class logic
export default class blockchain {
    chain : Block[];

    constructor(chain) {
        this.chain = [this.createGenesisBlock()];
    };

    createGenesisBlock() :Block{
        return {
            index: 0,
            hash: "",
            previousHash: "",
            data:{
                index: 0,
                transaction: TransactionData.Completed
            },
            timestamp: new Date().toISOString(),
        };
    };

    add() {

    };
};

const newBlockChain = new blockchain();