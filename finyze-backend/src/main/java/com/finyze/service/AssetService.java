package com.finyze.service;

import com.finyze.model.Asset;
import com.finyze.repository.AssetRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AssetService {
    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Asset getAsset(Long id) {
        return assetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Asset not found"));
    }

    public Asset saveAsset(Asset asset) {
        return assetRepository.save(asset);
    }
}

