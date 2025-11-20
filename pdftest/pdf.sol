// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PDFStorage {

    // ============ Document Storage ============
    struct Document {
        string ipfsHash;    // IPFS CID of the PDF
        string name;        // Optional name/description
        uint256 uploadedAt; // Timestamp 
        address uploadedBy; // Uploader's address
    }

    mapping(uint256 => Document) public documents; // Track documents by an incremental ID
    uint256 public nextDocumentId;                  // Auto-incrementing ID

    // ============ Events ============ 
    event DocumentUploaded(
        uint256 indexed docId,
        address indexed uploader,
        string ipfsHash,
        string name
    );

    // ============ Functions ============

    /**
     * @notice Upload a PDF hash to the contract
     * @param ipfsHash The IPFS CID of the PDF
     * @param name Optional name or description
     */
    function uploadDocument(string calldata ipfsHash, string calldata name) external {
        require(bytes(ipfsHash).length > 0, "IPFS hash required");

        uint256 docId = nextDocumentId;

        documents[docId] = Document({ 
            ipfsHash: ipfsHash,
            name: name,
            uploadedAt: block.timestamp,
            uploadedBy: msg.sender
        });

        nextDocumentId++;

        emit DocumentUploaded(docId, msg.sender, ipfsHash, name);
    }

    /**
     * @notice Retrieve a document by its ID
     * @param docId ID of the document
     * @return ipfsHash IPFS CID
     * @return name Name/description
     * @return uploadedAt Timestamp
     * @return uploadedBy Uploader address
     */
    function getDocument(uint256 docId)
        external
        view
        returns (string memory ipfsHash, string memory name, uint256 uploadedAt, address uploadedBy)
    {
        Document storage doc = documents[docId];
        return (doc.ipfsHash, doc.name, doc.uploadedAt, doc.uploadedBy);
    }
}
