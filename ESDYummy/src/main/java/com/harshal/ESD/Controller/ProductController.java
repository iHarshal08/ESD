package com.harshal.ESD.Controller;

import com.harshal.ESD.entity.Product;
import com.harshal.ESD.repo.ProductRepository;
import com.harshal.ESD.service.ProductService;
import org.hibernate.engine.spi.SessionDelegatorBaseImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;
    private final ProductRepository productRepository;
    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }

    @GetMapping("/top2")
    public List<Product> getTop2ProductsByPriceRange(
            @RequestParam double minPrice,
            @RequestParam double maxPrice
    ) {
        System.out.println("getTop2ProductsByPriceRange");
        return productService.getTop2ProductsByPriceRange(minPrice, maxPrice);
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {

        Product savedProduct = productRepository.save(product); // Save product to the database
        return ResponseEntity.ok(savedProduct); // Return the saved product as response
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @RequestBody Product updatedProduct
    ) {
        return productService.updateProduct(id, updatedProduct)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (productService.deleteProduct(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

