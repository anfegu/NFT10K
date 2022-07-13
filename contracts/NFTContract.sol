// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//import 1155 token contract from Openzeppelin
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTContract is ERC1155, Ownable {
    using SafeMath for uint256;

    constructor(uint n, string memory meta_ipfs)
        ERC1155(
            meta_ipfs
        )
    {
        // account, token_id, number
        for (uint i=1; i<= n; i++){
            _mint(msg.sender, i, 1, "");
        }
    }

    /*
    // More to come here.
    function mint(address account, uint256 id, uint256 amount) public onlyOwner {
        _mint(account, id, amount, "");
    }
    function burn(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
    }
    */
}
